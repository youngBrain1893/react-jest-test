import * as React from 'react';

const Customer: React.FC = props => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  })

  return (
    <div>
      {loading ? 'loading' : 'loaded'}
      {props.children && <span>{props.children}</span>}
    </div>
  );
}

export default Customer;
