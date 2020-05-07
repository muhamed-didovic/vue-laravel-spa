<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login</div>
                    <div class="card-body">

                        <div class="alert alert-danger" v-if="errors.root">
                            {{ errors.root }}
                        </div>

                        <form class="form-horizontal" role="form" @submit.prevent="submit">
                            <div class="form-group row" v-bind:class="{ 'has-error': errors.email }">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Email address</label>
                                <div class="col-md-6">
                                    <input id="email"
                                           type="text"
                                           class="form-control"
                                           name="email"
                                           autofocus
                                           v-model="email">

                                    <span class="invalid-feedback" role="alert" v-if="errors.email">
                                        <strong>{{ errors.email[0] }}</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row" v-bind:class="{ 'has-error': errors.password }">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                <div class="col-md-6">
                                    <input id="password"
                                           type="password"
                                           class="form-control"
                                           name="password"
                                           v-model="password">

                                    <span class="invalid-feedback" role="alert" v-if="errors.password">
                                        <strong>{{ errors.password[0] }}</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        Login
                                    </button>

                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import localforage from 'localforage'
    import {isEmpty} from 'lodash'

    export default {
        data() {
            return {
                email: null,
                password: null,
                errors: []
            }
        },
        methods: {
            ...mapActions({
                login: 'auth/login'
            }),
            submit() {
                this
                    .login({
                        payload: {
                            email: this.email,
                            password: this.password
                        },
                        context: this
                    })
                    .then(() => {
                        localforage.getItem('intended').then((name) => {
                            if (isEmpty(name)) {
                                this.$router.replace({name: 'home'})
                                return
                            }

                            this.$router.replace({name: name})
                        })
                    })
            }
        }
    }
</script>
