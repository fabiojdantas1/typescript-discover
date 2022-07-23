//creates types assertions
type UserResponse = {
  id: number;
  name: string;
  avatar: string;
}

let userResponse = {} as UserResponse;

userResponse.id = 123;
userResponse.name = 'John';
userResponse.avatar = 'http://example.com/image.png';

console.log(userResponse);
