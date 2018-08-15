<template>
    <aside class="main-sidebar">
        <section class="sidebar">
            <!-- Sidebar user panel -->
            <div class="user-panel">
                <div class="pull-left image">
                    <img :src="auth_user.profile_image" class="img-circle">
                </div>
                <div class="pull-left info">
                    <p>{{ auth_user.name }}</p>
                    <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                </div>
            </div>

            <!-- search form -->
            <form action="#" method="get" class="sidebar-form">
                <div class="input-group">
                    <input type="text" name="q" class="form-control" placeholder="Search...">
                    <span class="input-group-btn">
                        <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i
                                class="fa fa-search"></i>
                        </button>
                    </span>
                </div>
            </form>
            <!-- /.search form -->

            <ul class="sidebar-menu" data-widget="tree">
                <li class="header"></li>

                <router-link :to="{ name:'dashboard' }" tag="li">
                    <a href="#"><i class="fa fa-dashboard"></i> <span>Dashboard</span></a>
                </router-link>

                <template v-for="(item ,index) in menulist">
                    <template v-if="item.menuUrl">
                        <router-link :to="item.menuUrl" tag="li">
                            <a href="#"><i :class="['fa',item.menuIcon]"></i><span>{{item.menuName}}</span></a>
                        </router-link>
                    </template>
                    <template v-else-if="item.menuSubLink">
                        <li class="treeview">
                            <a href="#">
                                <i :class="['fa',item.menuIcon]"></i>
                                <span>{{item.menuName}}</span>
                                <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                          </span>
                            </a>
                            <ul class="treeview-menu">
                                <template v-for="(subitem,subindex) in item.menuSubLink">
                                    <router-link :to="subitem.menuUrl" tag="li">
                                        <a href="#"><i class="fa fa-circle-o"></i><span>{{subitem.menuName}}</span></a>
                                    </router-link>
                                </template>
                            </ul>
                        </li>
                    </template>
                </template>

            </ul>
        </section>
    </aside>
</template>

<script>
    import {MENULIST} from './../../menuList'; // 引入的自定义菜单数据
    export default {
        computed: {
            auth_user() {
                return this.$store.state.user;
            }
        },
        name: 'layout-sidebar',
        data: function () {
            return {
                menulist: MENULIST, // 自定义菜单数据
            };
        },
        created: function () {
            this.$store.dispatch('getUserData');
        },
    };
</script>
