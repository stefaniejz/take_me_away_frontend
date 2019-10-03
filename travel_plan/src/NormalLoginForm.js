import React, { Component } from 'react';
import './App.css';
import { Form, Input, Icon, Checkbox, Button } from 'antd';

class NormalLoginForm extends Component {
    handleRegister=()=>{
        this.props.history.push("/register")
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json'
                },
                body: JSON.stringify({
                  user: {
                    name: values.username,
                    password: values.password
                  }
                })
              })
                .then(r => {
                    console.log(r)
                    if(r.status===401) {
                        console.log("here")
                      this.props.form.setFields({
                          username:{
                             errors:[new Error("Username and Password don't match")]
                          }
                        })
                        throw new Error("Username and Password don't match");
                     }
                        return r.json()       
                    
                })
                .then(data => {
                    console.log(data)
                    localStorage.setItem('currentUserId', data.user.id);
                    localStorage.setItem('currentUserName', data.user.name);
                    localStorage.setItem('jwt', data.jwt);
                    this.props.history.push("/");
                }).catch(error => {
                    
                })
          }
        });
      };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="loginPage" style={{height: "140vh",display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
             backgroundImage: "url(https://cdn.dribbble.com/users/989466/screenshots/7305019/media/48d16a1f6e1fcbcfc7228ca6bdbbc642.png)"}}>
                 <h1 id="sign-in" style={{color:"#F4924A", fontWeight:"bold"}}>Take Me Away!</h1>
                 <div
                    className="signup"
                    style={{
                    width: "500px",
                    padding: "80px",
                    // background: " #9C9C9C",
                    opacity: "0.8"
                    }}
                >
                <Form  onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Remember me</Checkbox>)}
                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="/register" onClick={this.handleRegister}>register now!</a>
                    </Form.Item>
                </Form>
                </div>
                <style>
                       @import url('https://fonts.googleapis.com/css?family=Mansalva|Pacifico|Permanent+Marker&display=swap');
                </style>

            </div>
        );
    }
}

export default NormalLoginForm;