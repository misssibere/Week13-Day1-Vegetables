/// this is an New Page for Vegetables
const React = require('react')
    class New extends React.Component {
       render () {

        return (
            <div>
            <h1>New Vegetables page</h1>
            <form action="/Vegetables" method="POST">
              Name: <input type="text" name="name" /><br/>
              Color: <input type="text" name="color" /><br/>
              Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
              <input type="submit" name="" value="Create Fruit"/>
            </form>
        </div>

            
         
         );
        }
     }

     module.exports  = New;
