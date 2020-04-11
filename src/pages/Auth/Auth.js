import React from 'react';

class Auth extends React.Component {

    submitHandler = () => {
    }

    authHandler = () => {
    }

    registerHandler = () => {
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.submitHandler}>
                <div className="field">
                    <label>Логин</label>
                    <input type="text" name="login" placeholder="test@test.ru"/>
                </div>
                <div className="field">
                    <label>Пароль</label>
                    <input type="text" name="password" placeholder="password"/>
                </div>
                <div className="field">
                    <div className="ui checkbox">
                        <input type="checkbox" tabIndex="0" className="hidden"/>
                        <label>I agree to the Terms and Conditions</label>
                    </div>
                </div>
                <button className="ui button" type="submit" onClick={this.authHandler}>Войти</button>
                <button className="ui button" type="submit" onClick={this.registerHandler}>Зарегистрироваться</button>
            </form>
        );
    }

}

export default Auth;