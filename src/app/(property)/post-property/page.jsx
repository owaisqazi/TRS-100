"use client";

import ClientAuthWrapper from "@/components/(property)/(post-property)/ClientAuthWrapper";
import PostPropertyMain from "@/components/(property)/(post-property)/post-property-main"

export default function PostPropertyPage() {
  return (
    <ClientAuthWrapper>
      <PostPropertyMain />
    </ClientAuthWrapper>
  );
}
