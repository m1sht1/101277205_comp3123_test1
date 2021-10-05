const resolvedPromise = () => {
    setTimeout(() => {
        let resolved = { 'message': 'delayed success'}
        console.log(resolved)
    }, 500)
}

const rejectedPromise = () => {
    setTimeout(() => {
        try{
            let rejected = { 'error': 'delayed exception!' }
            console.log(rejected)
        }catch (e){
            console.error(e)
        }
    }, 500)
}

resolvedPromise()
rejectedPromise()