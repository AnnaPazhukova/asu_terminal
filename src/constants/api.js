class Api {
    #baseurl;
    #headers;
    constructor({baseUrl, headers}) {
        this.#baseurl = baseUrl
        this.#headers = headers
    }

    #onResponse(res) {
        return res.ok ? res.json() : res.json().then(err => Promise.reject(err))
    }

    async getAllInfo() {
        return Promise.all([this.getTeachers(), this.getGroups()])
    }

    async getTeachers(){
        return fetch(`${this.#baseurl}/teacher/`, {
        headers: this.#headers
        })
            .then(this.#onResponse)
    }

    async getTeacherById(teacherId){
        return fetch(`${this.#baseurl}/teacher/${teacherId}`, {
            headers: this.#headers
            })
                .then(this.#onResponse)
    }

    async getTeacherSchedule(teacherId){
        return fetch(`${this.#baseurl}/teacher/${teacherId}/schedule/`, {
            headers: this.#headers
            })
                .then(this.#onResponse)
    }

    async getTeacherExam(teacherId){
        return fetch(`${this.#baseurl}/teacher/${teacherId}/exam/`, {
            headers: this.#headers
            })
                .then(this.#onResponse)
    }

    async getGroups(){
        return fetch(`${this.#baseurl}/group/`, {
            headers: this.#headers
            })
                .then(this.#onResponse)
    }

    async getGroupById(groupId){
        return fetch(`${this.#baseurl}/group/${groupId}`, {
            headers: this.#headers
            })
                .then(this.#onResponse)
    }

    async getGroupSchedule(groupId){
        return fetch(`${this.#baseurl}/group/${groupId}/schedule/`, {
            headers: this.#headers
            })
                .then(this.#onResponse)
    }

    async getGroupExam(groupId){
        return fetch(`${this.#baseurl}/teacher/${groupId}/exam/`, {
            headers: this.#headers
            })
                .then(this.#onResponse)
    }
     
    
}

const api = new Api({
    baseUrl: 'http://127.0.0.1:8000',
    headers: {
        'content-type': 'application/json' 
    }

})

export default api