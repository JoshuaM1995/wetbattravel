import React from 'react';
import {Card, CardContent, CardHeader, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <Card variant="outlined">
      <CardHeader title="Page Not Found!" />
      <CardContent>
        <Typography variant="h6">
          The page you were looking for could not be found. Go back to the <Link to="/dashboard">dashboard</Link>.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NotFound;
