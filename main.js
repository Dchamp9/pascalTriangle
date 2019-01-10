let display
/** displays psacal triangle in div **/
function showPascalTriangle()
{
    let  num = document.getElementById('number').value;

      if(num === "" || num == 0){
        display = "<p> Oops....Please enter a valid number </p>"
        document.getElementById("display").innerHTML = display;
      }
      else{
        display = "<p>Here is your Pascal's Triangle</p>";
        display+="<p>"
        let pascalArray = createPascalsTriangle(num);
        printPascalsTriangle(pascalArray);
        document.getElementById("display").innerHTML = display;
  }
};

/**
 Function that create function based on the factorial formular:
 value(n,k) = n!/(k!*(n-k)!)
 **/

function createPascalsTriangle(rowCount)
{
    let pascalTriangle = [];
    let columnCount = 1;
    let j;
    for(let i = 0; i < rowCount; i++)
    {
        pascalTriangle[i] = [];
        for(j = 0; j < columnCount; j++)
        {
            pascalTriangle[i][j] = factorial(i) / (factorial(j) * factorial(i - j));
        }
        columnCount++;
    }
    return pascalTriangle;
}

/**
 Prints pascal traingle after rendering the formular function above:

 **/

function printPascalsTriangle(pascalTriangle)
{
    let columnCount = 1;
    let rowCount = pascalTriangle.length;
    for(let i = 0; i < rowCount; i++)
    {
        for(let j = 0; j < columnCount; j++)
        {
          display+=  `${String(pascalTriangle[i][j]).padEnd(3, " ").replace(/ /g, " ")}`;
        }
        display+="<br/>";
        columnCount++;
    }
    display+="</p>"
}

/**
 Function for factorial....
 **/
function factorial(n)
{
    if(n == 0)
    {
        return 1;
    }
    else
    {
        let f = n;
        for(let i = n - 1; i > 1; i--)
        {
            f*= i;
        }
        return f;
    }
}
