export default [
	{ name: 'email.invitation.html', render: require('./email.invitation.html.leaf.tsx').default },
	{ name: 'email.invitation.plain', render: require('./email.invitation.plain.leaf.tsx').default },
	{ name: 'web.info-message', render: require('./web.info-message.leaf.tsx').default },
	{ name: 'web.invitation', render: require('./web.invitation.leaf.tsx').default },
]
