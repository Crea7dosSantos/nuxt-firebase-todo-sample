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
import 'firebase/auth'

const uiConfig = {
    signInSuccessUrl: '/',
    signInOptions: [
        {
    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
        }
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
