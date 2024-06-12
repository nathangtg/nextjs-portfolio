import LoadingAnimation from "@/components/loading-component/loading-component";
import CertificateList from "@/components/certificate-list/certificate-list";
import { useEffect, useState } from "react";

export default function Certificates() {
  const [loading, setLoading] = useState(true);
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    async function fetchCertificates() {
      try {
        const res = await fetch("/api/GetCertificates");
        if (!res.ok) {
          throw new Error("Failed to fetch certificates");
        }
        const data = await res.json();
        setCertificates(data);
      } catch (error) {
        console.error("Error fetching certificates:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCertificates();
  }, []);

  return (
    <section
      className="mt-12 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      id="certificates"
    >
      <h2 className="text-3xl font-bold text-slate-200 mb-24 pt-24 pb-10">
        Certificates
      </h2>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <CertificateList certificates={certificates} />
      )}
    </section>
  );
}
