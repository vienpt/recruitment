export default function ({ store, redirect }) {
  // if the user is not authenticated
  if (!store.state.auths.auth) {
    return redirect('/user/signin');
  }
}
