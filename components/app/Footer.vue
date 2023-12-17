<template>
  <footer class="mt-8">
    <div class="w-full px-4 pb-2 pt-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <nuxt-link to="/" class="flex items-center">
            <Logo />
          </nuxt-link>
          <div class="text-sm text-gray-400 mt-3 sm:w-2/3 w-full">
            {{ $t("footer.description") }}
          </div>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 class="mb-6 text-md font-semibold text-gray-900 uppercase">
              {{ $t("footer.section.about.title") }}
            </h2>
            <ul class="text-gray-500 font-medium">
              <li class="mb-4">
                <nuxt-link to="#" class="hover:underline">{{
                  $t("footer.section.about.howItWorks")
                }}</nuxt-link>
              </li>
              <li class="mb-4">
                <nuxt-link to="#" class="hover:underline">{{
                  $t("footer.section.about.featured")
                }}</nuxt-link>
              </li>
              <li class="mb-4">
                <nuxt-link to="#" class="hover:underline">{{
                  $t("footer.section.about.partnership")
                }}</nuxt-link>
              </li>
              <li class="mb-4">
                <nuxt-link to="#" class="hover:underline">{{
                  $t("footer.section.about.businessRelation")
                }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-md font-semibold text-gray-900 uppercase">
              {{ $t("footer.section.community.title") }}
            </h2>
            <ul class="text-gray-500 font-medium">
              <li class="mb-4">
                <nuxt-link to="#" class="hover:underline">{{
                  $t("footer.section.community.events")
                }}</nuxt-link>
              </li>
              <li class="mb-4">
                <nuxt-link to="#" class="hover:underline">{{
                  $t("footer.section.community.blog")
                }}</nuxt-link>
              </li>
              <li class="mb-4">
                <nuxt-link to="#" class="hover:underline">{{
                  $t("footer.section.community.podcast")
                }}</nuxt-link>
              </li>
              <li class="mb-4">
                <nuxt-link to="#" class="hover:underline">{{
                  $t("footer.section.community.inviteFriend")
                }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-md font-semibold text-gray-900 uppercase">
              {{ $t("footer.section.socials.title") }}
            </h2>
            <ul class="text-gray-500 font-medium">
              <li class="mb-4">
                <nuxt-link to="#" class="hover:underline">{{
                  $t("footer.section.socials.discord")
                }}</nuxt-link>
              </li>
              <li class="mb-4">
                <nuxt-link to="#" class="hover:underline">{{
                  $t("footer.section.socials.instagram")
                }}</nuxt-link>
              </li>
              <li class="mb-4">
                <nuxt-link to="#" class="hover:underline">{{
                  $t("footer.section.socials.twitter")
                }}</nuxt-link>
              </li>
              <li class="mb-4">
                <nuxt-link to="#" class="hover:underline">{{
                  $t("footer.section.socials.facebook")
                }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-400 sm:text-center"
          >&#169; {{ new Date().getFullYear() }}
          <nuxt-link to="/" class="hover:underline">{{
            $t("appName")
          }}</nuxt-link
          >. {{ $t("footer.copyright") }}
        </span>
        <div class="flex mt-4 sm:justify-center sm:mt-0">
          <nuxt-link to="#" class="text-gray-900 hover:text-gray-500">
            <span>{{ $t("footer.privacyPolicy") }}</span>
          </nuxt-link>
          <nuxt-link to="#" class="text-gray-900 hover:text-gray-500 ms-5">
            <span>{{ $t("footer.termsConditions") }}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>
