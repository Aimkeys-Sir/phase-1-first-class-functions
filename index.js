function receivesAFunction(callback)
{
    callback();
}
function returnsAnAnonymousFunction()
{
    return function(){
        return "before all"
    }
}
function returnsANamedFunction()
{
    return function cows()
    {
        return "before all";
    }
}
console.log(returnsANamedFunction())