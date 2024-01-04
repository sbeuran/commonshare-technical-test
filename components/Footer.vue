<template>
  <div class="bg-primary-0 px-4 py-4 sm:px-8 sm:flex sm:flex-wrap">
    <div class="sm:w-1/2 sm:self-center">
      <span class="text-primary-500 basis-2/12 text-2xl font-bold tracking-[-1px]"
        >DM</span
      >
      <div class="text-sm text-secondary-300 my-4 leading-relaxed w-4/5">
        Our vision is to provide convenience and help increase your sales business
      </div>
    </div>
    <div class="flex flex-wrap sm:flex-nowrap sm:flex-1 sm:justify-between">
      <FooterLinkList :links="aboutLinks" heading="About" class="w-1/2"></FooterLinkList>
      <FooterLinkList
        :links="socialLinks"
        heading="Socials"
        class="w-1/2"
      ></FooterLinkList>
      <FooterLinkList
        :links="communityLinks"
        heading="Community"
        class="w-1/2"
      ></FooterLinkList>
    </div>

    <div class="border-b-2 border-secondary-100 w-full my-8 hidden sm:block"></div>

    <div class="sm:flex sm:flex-row-reverse sm:justify-between sm:w-full sm:mb-6">
      <div class="flex justify-between text-sm sm:gap-x-8">
        <a href="/privacy">Privacy & Policy</a>
        <a href="/privacy">Terms & Conditions</a>
      </div>

      <div class="text-sm mt-8 sm:mt-0">©2024 DM. All rights reserved</div>
    </div>
  </div>
</template>

<script setup>
const aboutLinks = [
  { label: "How it works", url: "https://example.com/link1" },
  { label: "Featured", url: "https://example.com/link2" },
  { label: "Partnership", url: "https://example.com/link3" },
  { label: "Business Relation", url: "https://example.com/link3" },
  // Add more links as needed
];

const socialLinks = [
  { label: "Discord", url: "https://example.com/link1" },
  { label: "Instagram", url: "https://example.com/link2" },
  { label: "Twitter", url: "https://example.com/link3" },
  { label: "Facebook", url: "https://example.com/link3" },
  // Add more links as needed
];

const communityLinks = [
  { label: "Events", url: "https://example.com/link1" },
  { label: "Blog", url: "https://example.com/link2" },
  { label: "Podcast", url: "https://example.com/link3" },
  { label: "Invite a friend", url: "https://example.com/link3" },
  // Add more links as needed
];
</script>

<style lang="scss" scoped></style>
