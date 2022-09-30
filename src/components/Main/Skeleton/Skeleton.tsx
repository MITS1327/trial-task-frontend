import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props : any) => (
    <ContentLoader
        speed={2}
        width={300}
        height={120}
        viewBox="0 0 300 120"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="15" y="3" rx="0" ry="0" width="240" height="114" />
        <rect x="225" y="508" rx="15" ry="15" width="115" height="45" />
        <rect x="53" y="506" rx="15" ry="15" width="98" height="37" />
    </ContentLoader>
)

export default Skeleton;