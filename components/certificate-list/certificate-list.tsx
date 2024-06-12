import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CertificateCard from "../certificate-box/certificate-box";

interface Certificate {
  Title: string;
  Year: number;
  Issuing_organisation: string;
}

export default function CertificateList({
  certificates,
}: {
  certificates: Certificate[];
}) {
  return (
    <ul className="py-4">
      <AnimatePresence>
        {certificates.map((certificate, index) => (
          <CertificateListItem key={index} certificate={certificate} />
        ))}
      </AnimatePresence>
    </ul>
  );
}

interface CertificateListItemProps {
  certificate: Certificate;
}

function CertificateListItem({ certificate }: CertificateListItemProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <CertificateCard certificate={certificate} />
    </motion.li>
  );
}
