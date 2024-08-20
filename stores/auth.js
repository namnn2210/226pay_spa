import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null, // Store token for authentication
        user: null,  // Store user information
    }),
    actions: {
        login(token, user) {
            this.token = token
            this.user = user
            localStorage.setItem('token', token)
        },
        logout() {
            this.token = null
            this.user = null
            localStorage.removeItem('token')
        },
    },
    getters: {
        isAuthenticated: (state) => !!state.token, // Return true if token exists
    }
})
