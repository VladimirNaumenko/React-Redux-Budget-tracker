export const types = {
    income: "inc",
    expense: "exp"
}
export const generateId = (previousId = 0)=>{
    return previousId+1;
}