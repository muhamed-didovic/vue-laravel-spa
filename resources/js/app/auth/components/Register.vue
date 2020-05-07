<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Register</div>

                    <div class="card-body">
                        <form class="form-horizontal" role="form" @submit.prevent="submit">

                            <div class="form-group row" v-bind:class="{ 'has-error': errors.name }">
                                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                                <div class="col-md-6">
                                    <input id="name" type="text" class="form-control" autofocus v-model="name">

                                    <span class="invalid-feedback" role="alert" v-if="errors.name">
                                        <strong>{{ errors.name[0] }}</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row" v-bind:class="{ 'has-error': errors.email }">
                                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                <div class="col-md-6">
                                    <input id="email" type="text" class="form-control" v-model="email">

                                    <span class="invalid-feedback" role="alert" v-if="errors.email">
                                        <strong>{{ errors.email[0] }}</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row" v-bind:class="{ 'has-error': errors.password }">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" v-model="password">

                                    <span class="invalid-feedback" role="alert" v-if="errors.password">
                                        <strong>{{ errors.password[0] }}</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        Register
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

    export default {
        data() {
            return {
                name: null,
                email: null,
                password: null,
                errors: []
            }
        },
        methods: {
            ...mapActions({
                register: 'auth/register'
            }),
            submit() {
                this.register({
                    payload: {
                        name: this.name,
                        email: this.email,
                        password: this.password
                    },
                    context: this
                }).then(() => {
                    this.$router.replace({name: 'home'})
                })
            }
        }
    }
</script>


