'use client';
import { Avatar } from '@heroui/react';

export const UserAvatar = ({ picture, alt }) => {
  return (
    <div className='relative flex overflow-hidden fill min-w-0 fill-width items-center justify-center radius-full'>
      <Avatar
        isBordered
        showFallback
        src={picture}
        name={alt}
        radius='full'
        className='w-[200px] h-[200px] object-fill overflow-hidden '
        // Todo: Change default object-fit to fill
        classNames={{
          img: 'object-fill',
        }}
      />
    </div>
  );
};
