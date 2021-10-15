import RequestReset from '../components/RequestReset';
import Reset from '../components/Reset';

export default function ResetPage({ query }) {
  if (!query?.token) {
    return (
      <div>
        <p>There was an error. We could not retreive your password reset token. Please enter your email once again below.</p>
        <RequestReset />
      </div>
    );
  }
  return (
    <div>
      <p>Reset your password.</p>
      <Reset token={query.token} />
    </div>
  );
}
