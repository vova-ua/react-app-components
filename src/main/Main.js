import React from 'react';
import './Main.css';

class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <main>
                    <article>
                        <header>
                            <h1>Article 1</h1>
                            <h1>Article 2</h1>
                        </header>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore voluptate tenetur quas accusantium consequuntur laboriosam minus modi, omnis aspernatur, necessitatibus corporis facere numquam fuga perspiciatis dolor soluta odio adipisci corrupti.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore voluptate tenetur quas accusantium consequuntur laboriosam minus modi, omnis aspernatur, necessitatibus corporis facere numquam fuga perspiciatis dolor soluta odio adipisci corrupti.</p>
                    </article>
                </main>
            </div>
        );
    }
}

export default Main;
