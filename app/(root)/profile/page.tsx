"use client";

import { useQuery } from "convex/react";

import EmptyState from "@/components/EmptyState";
import LoaderSpinner from "@/components/LoaderSpinner";
import PodcastCard from "@/components/PodcastCard";
import ProfileCard from "@/components/ProfileCard";
import { api } from "@/convex/_generated/api";
import { ProfilePodcastProps } from "@/types";
import { useClerk } from "@clerk/nextjs";
import { usePathname, useRouter } from 'next/navigation';
import Image from "next/image";
import { Button } from "../../../components/ui/button";
//https://accounts.youpoder.com/user
const MyProfilePage = () => {

  const { user } = useClerk();

  const pathname = usePathname();
  const router = useRouter();

  const podcastsData = useQuery(api.podcasts.getPodcastByAuthorId, {
    authorId: user?.id!,
  }) as ProfilePodcastProps;

  if (!user || !podcastsData) return <LoaderSpinner />;

  return (
    <section className="mt-9 flex flex-col">
      <h1 className="text-20 font-bold text-white-1 max-md:text-center">
        My Profile
      </h1>
      <div className="mt-6 flex flex-col gap-6 max-md:items-center md:flex-row">
        <ProfileCard
          profileId={user.id}
          podcastData={podcastsData}
          imageUrl={user?.imageUrl!}
          userFirstName={user.firstName!}
        />
          <Button
            onClick={() => router.push('https://accounts.youpoder.com/user')}
            className="text-16 bg-[--accent-color] font-extrabold text-white-1 lg:mt-7 md:mt-7"
          >
            <Image
              src="/icons/edit.svg"
              width={20}
              height={20}
              alt="edit profile"
            />{" "}
            &nbsp; Edit Profile
          </Button>
      </div>
      <section className="mt-9 flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">All Podcasts</h1>
        {podcastsData && podcastsData.podcasts.length > 0 ? (
          <div className="podcast_grid">
            {podcastsData?.podcasts
              ?.slice(0, 4)
              .map((podcast) => (
                <PodcastCard
                  key={podcast._id}
                  imgUrl={podcast.imageUrl!}
                  title={podcast.podcastTitle!}
                  description={podcast.podcastDescription}
                  podcastId={podcast._id}
                />
              ))}
          </div>
        ) : (
          <EmptyState
            title="You have not created any podcasts yet"
            buttonLink="/create-podcast"
            buttonText="Create Podcast"
          />
        )}
      </section>
    </section>
  );
};

export default MyProfilePage;
