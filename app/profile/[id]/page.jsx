'use client';

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");
  console.log("params", params);

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        `/api/users/${params?.id}/posts`
      );
      const data = await response.json();
      setUserPosts(data);
    }

    if(params?.id) fetchPosts();
  }, [params.id]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination`}
      data={userPosts}
    />
  )
}

export default UserProfile;