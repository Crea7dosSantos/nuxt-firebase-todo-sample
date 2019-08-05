<template>
    <section>
        <div>
            <div id="firebaseui-auth-container"/>
            <div id="loader">Loading...</div>
        </div>
    </section>
</template>

<script>
import firebase from '~/plugins/firebase'
import 'firebaseui/dist/firebaseui.css'

const uiConfig = {
    signInSuccessUrl: '/todos',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID  //メール認証
    ],
}

export default {
    mounted() {
        require('firebaseui/dist/firebaseui.css');
        const firebaseui = require('firebaseui');
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
        ui.start("#firebaseui-auth-container", uiConfig);
    }
}
</script>
