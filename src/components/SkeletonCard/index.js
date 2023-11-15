import React from "react";
import Skeleton from "react-loading-skeleton";
import { Container } from "./style";

function SkeletonCard({ props }) {
  return (
    <Container>
      <div className="lef-Col">
        <Skeleton width={"55%"} height={30} {...props} />
      </div>
    </Container>
  );
}

export default SkeletonCard;
