import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Layout from '@/views/layout/Index'
import Login from '@/views/login/Login'
import AuthRouter from '@/views/auth/AuthRouter'

const Router = () => {
	return (
		<HashRouter>
			<Switch>
				<Route component={Login} exact path="/login" />
				<AuthRouter path="/" component={Layout} />
			</Switch>
		</HashRouter>
	)
}

export default Router