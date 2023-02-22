<script setup>
import { reactive } from 'vue';
import { VaSidebar, VaSidebarItem, VaSidebarItemContent,
    VaSidebarItemTitle, VaIcon } from 'vuestic-ui';

const items = reactive([
    {title: "Projects", icon: "view_list", active: true},
    {title: "Researchers", icon: "person", active: false},
    {title: "Funding Sources", icon: "account_balance", active: false}
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

                <va-sidebar-item-content>
                    <va-icon :name="item.icon" />
                    <va-sidebar-item-title>
                        {{ item.title }}
                    </va-sidebar-item-title>
                </va-sidebar-item-content>

            </va-sidebar-item>
        </va-sidebar>
    </div>
</template>