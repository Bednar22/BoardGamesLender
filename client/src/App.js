import './assets/App.css';
import { Homepage } from './components/homepage/homepage.js';
import { SignUp } from './components/login/signUp';
import { Login } from './components/login/login';
import { Routes, Route } from 'react-router-dom';
import { NoAuthPath } from './utils/noAuthPath';
import { PrivatePath } from './utils/privateRoute';
import { NoMatch } from './utils/noMatch';
import { useAuth, AuthProvider } from './utils/authContext';
import { Addpost } from './components/posts/addPost';
import { Navbar } from './components/navbar/navbar';
import { UserProfileMain } from './components/userProfile/userProfileMain';
import { PostsPage } from './components/posts/postsPage';

function App() {
    return (
        <>
            <AuthProvider>
                <Navbar></Navbar>
                <Routes>
                    <Route path='/' element={<Homepage />} />

                    <Route
                        path='signup'
                        element={
                            <NoAuthPath>
                                <SignUp />
                            </NoAuthPath>
                        }
                    />

                    <Route
                        path='login'
                        element={
                            <NoAuthPath>
                                <Login />
                            </NoAuthPath>
                        }
                    />

                    <Route
                        path='addPost'
                        element={
                            <PrivatePath>
                                <Addpost></Addpost>
                            </PrivatePath>
                        }
                    ></Route>

                    <Route
                        path='posts'
                        element={
                            <PrivatePath>
                                <PostsPage></PostsPage>
                            </PrivatePath>
                        }
                    ></Route>

                    <Route
                        path='user'
                        element={
                            <PrivatePath>
                                <UserProfileMain></UserProfileMain>
                            </PrivatePath>
                        }
                    ></Route>

                    <Route path='*' element={<NoMatch></NoMatch>} />
                </Routes>
            </AuthProvider>
        </>
    );
}

export default App;
