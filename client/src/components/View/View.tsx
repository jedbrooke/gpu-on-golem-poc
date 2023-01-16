import Image from 'next/image';
import { saveAs } from 'file-saver';
import { renderIcon } from 'assets/utils';
import { Placeholder } from 'components';

function View({ src, value, blocked }: { src: string; value: string; blocked?: boolean }) {
  const handleSave = () => saveAs(src, `${value}.png`);

  return (
    <div className="relative mx-auto w-[36.2rem]">
      <Placeholder>
        <Image src={src} alt={value} width={362} height={362} />
      </Placeholder>
      {!blocked && (
        <button
          className="absolute bottom-[1rem] right-[1rem] h-[2rem] w-[1.8rem] bg-black bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${renderIcon('download')})` }}
          onClick={handleSave}
        />
      )}
    </div>
  );
}

export default View;