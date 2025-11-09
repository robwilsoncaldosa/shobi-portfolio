import PageSection from "./page-section";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Certifications() {
  return (
    <PageSection id="certifications">
      <div className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-semibold leading-none text-foreground">
          Certifications
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card className="border-0 py-0 flex items-center justify-center bg-transparent aspect-[4/5]">
            <Image
              src="/itil.svg"
              alt="ITIL Foundation Certificate in IT Service Management"
              width={1600}
              height={1200}
              className="w-[85%] h-full object-contain"
            />
          </Card>

          <Card className="border-0 py-0 bg-transparent aspect-[4/5]">
            <Image
              src="/best-blockchain.svg"
              alt="Certificate of Excellence – Best Use of Blockchain"
              width={1600}
              height={1200}
              className="w-full h-full object-contain"
            />
          </Card>

          <Card className="border-0 py-0 bg-transparent aspect-[4/5]">
            <Image
              src="/ux-certificate.svg"
              alt="Professional Certification – UX Designer"
              width={1600}
              height={1200}
              className="w-full h-full object-contain"
            />
          </Card>
        </div>
      </div>
    </PageSection>
  );
}