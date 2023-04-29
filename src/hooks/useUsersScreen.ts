import { useState, useEffect } from 'react';
import { getUsers } from '../service/utils/users';

type UsersScreenResult = {
  users: User[];
  loading: boolean;
};

const useUsersScreen = (): UsersScreenResult => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleUsers = async () => {
    setLoading(true);
    setUsers(await getUsers());
    setLoading(false);
  };

  useEffect(() => {
    handleUsers();
  }, []);

  return {
    users,
    loading
  };
};

export default useUsersScreen;
