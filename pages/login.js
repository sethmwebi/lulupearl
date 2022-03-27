import { useState, useEffect } from 'react'
import { useRouter } from "next/router"
import { useSession, getProviders, signIn, signOut } from "next-auth/react"

const Login = () => {
	const [providers, setProviders] = useState()
	const {data: session, status} = useSession()
	const router = useRouter()

	useEffect(() => {
		const setTheProviders = async () => {
			const setupProviders = await getProviders()
			setProviders(setupProviders)
		}

		setTheProviders()
	},[])

	if(session){
		// router.push("/")
		console.log(session)
	}

	return (
		<div>
			<button type="button" onClick={() => signIn()}>
				Sign in
			</button>
			{providers?.email && (
				<>
					<button type="button" onClick={() => signIn(providers.email.id)}>
						Email Login
					</button>
				</>
			)}
			{providers?.google && (
				<>
					<button type="button" onClick={() => signIn(providers.google.id)}>
						Google Login
					</button>
				</>
			)}
		</div>
	)
}

export default Login