import React from 'react';
import { EventData } from '../../types';

interface EventCardProps {
  event: EventData;
  onEditSignUp?: () => void;
  onSignUp?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  event,
  onEditSignUp,
  onSignUp
}) => {
  return (
    <article className="mx-auto my-0 w-full max-w-[271px] max-sm:max-w-full">
      <div className="px-5 py-4 mb-5 rounded-lg bg-cyan-700 bg-opacity-20">
        <h3 className="mb-2.5 text-xl text-neutral-700">
          {event.name}
        </h3>
        <p className="mb-1 text-base text-neutral-700">
          {event.dateTime}
        </p>
        <p className="mb-1 text-base text-neutral-700">
          {event.location}
        </p>
      </div>
      <div className="flex gap-6 justify-end max-sm:justify-center">
        <button
          className="px-5 py-2.5 text-sm text-white bg-cyan-700 rounded-lg cursor-pointer border-[none] w-[99px]"
          onClick={onEditSignUp}
        >
          Edit Sign Up
        </button>
        <button
          className="px-5 py-2.5 text-sm text-white bg-cyan-700 rounded-lg cursor-pointer border-[none] w-[70px]"
          onClick={onSignUp}
        >
          Sign Up
        </button>
      </div>
    </article>
  );
};

export default EventCard;