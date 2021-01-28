import React, { Component } from 'react'
import { fetchRepos } from "./api.js";
import Loading from "./Loading";

class Repos extends Component {

	constructor(props) {
		super(props);
		this.state = {
			repos: [],
			Loading: true
		}
	}

	componentDidMount() {
		this.updateRepos(this.props.id);
	}

	componentDidUpdate (prevProps) {
		if (prevProps.id !== this.props.id) {
		  this.updateRepos(this.props.id)
		}
	}

	updateRepos = id => {
		this.setState({ loading: true });
	
		fetchRepos(id).then(repos =>
		  this.setState({
			repos,
			loading: false
		  })
		);
	}

	render() {
		const { loading, repos } = this.state

		if (loading === true) {
			return <Loading />
		}

		return (
			<ul>
				{repos.map(({ name, handle, stars, url }) => (
				<li key={name}>
					<ul>
						<li>
							<a href={url}>{name}</a>
						</li>
						<li>@{handle}</li>
						<li>{stars} stars</li>
					</ul>
				</li>
				))}
			</ul>
		)
	}
}

export default Repos