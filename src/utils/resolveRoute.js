const resolveRoute = (route)=>{
	console.log(route, route.length);

	if (route.length <=3){
		let validRoute = route === '/' ? route : '/:id'
		return validRoute
	}

	return `/${route}`

}

export default resolveRoute