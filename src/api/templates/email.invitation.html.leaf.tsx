export default function emailInvitationHtmlLeaf(params: any) {
	return /*html*/ `
<!-- email.invitation.html.leaf -->
<style>
	* {
		font-family: sans-serif;
	}
</style>
<h1>Hi #(user.firstname) #(user.lastname)</h1>
<p>&nbsp;</p>
<p>
	You have been invited to one of our teams by #(sender.firstname) #(sender.lastname) (#(sender.email)).<br />
	You can confirm your registration now by clicking on this <a href="#(link)">link</a>
</p>
<p>&nbsp;</p>
<p>Verification code is: <strong>#(verification)</strong></p>
<p>&nbsp;</p>
<p>#(system.info.name)</p>
`
}
