/// This is an Index Page for the Vegetable
const React = require('react');
class Index extends React.Component {
    render() {
        const { Vegetables } = this.props;
        return (
                <div>
                    <h1>Vegetable Index Page</h1>

                    <ul>
                    
                        {Vegetables.map((Vegetable, i) => {
                            return (
                                <li >
                                    The{' '}
                                    <a href={`/Vegetables/${i}`}>
                                        {Vegetable.name}
                                    </a>{' '}
                                    is {Vegetable.color}. <br></br>
                                    {Vegetable.readyToEat
                                        ? ` It is ready to eat`
                                        : ` It is not ready to eat`}
                                    <br />
                                </li>
                            );
                        })}
                    </ul>
                    <nav>
                        <a href='/Vegetables/new'> Create a new Vegetable </a>
                    </nav>
                </div>
        );
    }
  }
  module.exports = Index;