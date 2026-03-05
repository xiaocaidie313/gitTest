function get<T>(key: string): T | null {
    try{
        const val = window.localStorage.getItem(key)
        if(!val){
            return null
        }
        return val as T
    }catch(err){
        console.log(err)
        return null
    }
}

function set<T>(key:string, value: T) {
    try{
        window.localStorage.setItem(key, JSON.stringify(value))
    }catch(error){
        console.log(error)
    }
}