<script setup>
import { reactive, computed } from 'vue';
import { VaSidebar, VaSidebarItem, VaSidebarItemContent,
    VaSidebarItemTitle, VaIcon } from 'vuestic-ui';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();

const items = reactive([
    {title: "Projects", icon: "view_list", url: "/", active: computed(() => route.name == "projects")},
    {title: "Researchers", icon: "person", url: "/researchers", active: computed(() => route.name == "researchers")},
    {title: "Funding Sources", icon: "account_balance", url: "/", active: false}
]);
</script>

<template>
    <div class="h-screen">
        <va-sidebar hoverable minimized-width="64px" color="#FFF" class="shadow-zinc-400 shadow-lg">
            <va-sidebar-item
                class="cursor-pointer" 
                v-for="item in items" 
                :key="item.title"
                :active="item.active"
            >

                <router-link :to="item.url">
                    <va-sidebar-item-content>
                        <va-icon :name="item.icon" />
                        <va-sidebar-item-title>
                            {{ item.title }}
                        </va-sidebar-item-title>
                    </va-sidebar-item-content>
                </router-link>

            </va-sidebar-item>
        </va-sidebar>
    </div>
</template>