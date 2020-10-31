<template>
    <div>
        <v-container fill-height="fill-height">
            <v-layout
                align-center="align-center"
                justify-center="justify-center"
            >
                <v-flex class="login-form text-xs-center">
                    <div class="display-1 mb-3">
                        <v-card light="light">
                            <v-card-text>
                                <div class="subheading">
                                    <template
                                        >Log in to your customer
                                        portal</template
                                    >
                                </div>
                                <v-form>
                                    <v-text-field
                                        v-model="name"
                                        light="light"
                                        prepend-icon="mdi-account"
                                        label="Chatroom name"
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="owner"
                                        light="light"
                                        prepend-icon="mdi-account"
                                        label="Owner name"
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="password"
                                        light="light"
                                        prepend-icon="mdi-lock"
                                        label="Password"
                                        type="password"
                                    ></v-text-field>
                                    <v-btn @click.prevent="create" block="block"
                                        >Create chatroom</v-btn
                                    >
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import { AppService } from '../api/api';
export default {
    name: 'Create',
    props: {
        msg: String
    },
    data: () => ({
        name: null,
        owner: null,
        password: null
    }),
    methods: {
        async create() {
            const response = await AppService.createRoom({
                name: this.name,
                owner: this.owner,
                password: this.password
            });
            console.log(response);
            // const user = await AppService.getUser();
            // console.log(user);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
.login-form {
    max-width: 400px;
}
</style>
