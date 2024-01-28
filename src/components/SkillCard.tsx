import { IconType } from 'react-icons';

interface SkillCardProps {
  Icon: IconType;
  title: string;
  description: string;
}

const SkillCard = ({ Icon, title, description }: SkillCardProps) => (
  <div className="flex-1 max-w-xs text-center">
    <div className="bg-yellow-400 h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-4 p-6">
      <Icon className="h-full w-full" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default SkillCard;