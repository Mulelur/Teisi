import React from "react";
import { SectionHeader } from "../../components";
import cv from "../../assets/cv/teisi.pdf";

export default function SectionHeaderContainer() {
  return (
    <SectionHeader>
      <SectionHeader.Container>
        <SectionHeader.Heading4>
          Hello My Name is Keikantsemang Princess Teisi
        </SectionHeader.Heading4>
        <SectionHeader.Heading1>
          I Want To become a very successful machenical engineer
        </SectionHeader.Heading1>
        <SectionHeader.Text>
          Productivity is never an accident. It’s always the result of a
          commitment to excellence, intelligent planning, and focused effort.
        </SectionHeader.Text>
        <SectionHeader.Download href={cv} target="_blank">
          DownLoad CV
        </SectionHeader.Download>
      </SectionHeader.Container>
    </SectionHeader>
  );
}
