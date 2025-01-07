import { Badge } from "@/components/ui/badge";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Course = () => {
  const courseData = {
    title: "Advanced React Development",
    instructor: "Sarah Johnson",
    instructorAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    price: 99.99,
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    level: "beginner",
    duration: "12 weeks",
    lessons: 24,
  };

  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100";
      case "intermediate":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100";
      case "advanced":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100";
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={courseData.thumbnail}
          alt={courseData.title}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
        <Badge
          className={`absolute top-4 right-4 ${getLevelColor(
            courseData.level
          )}`}
        >
          {courseData.level}
        </Badge>
      </div>

      <CardHeader className="space-y-2">
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={courseData.instructorAvatar} />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground dark:text-gray-400">
            {courseData.instructor}
          </span>
        </div>
        <h3 className="hover:underline font-bold text-lg truncate dark:text-gray-100">
          {courseData.title}
        </h3>
      </CardHeader>

      <CardFooter className="flex justify-between items-center">
        <div className="text-2xl font-bold dark:text-gray-100">
          ₹{courseData.price}
        </div>
      </CardFooter>
    </Card>
  );
};

export default Course;
