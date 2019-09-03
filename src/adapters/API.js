const endpoint = "http://localhost:3000/api";
const signupUrl = `${endpoint}/users`;
const loginUrl = `${endpoint}/login`;
const jobsUrl = `${endpoint}/jobs`;
const filteredJobsUrl = `${endpoint}/browse_jobs`;
const validateUrl = `${endpoint}/validate`;
const dropJobUrl = `${endpoint}/drop_job`;
const acceptJobUrl = `${endpoint}/accept_job`;

const jsonify = res => {
  if (res.ok) return res.json();
  else throw res.json();
};

const handleServerError = response => {
  // console.error(response)
  throw response;
};

const saveToken = data => {
  localStorage.setItem("token", data.token);
  return data.user;
};

const constructHeaders = (moreHeaders = {}) => ({
  Authorization: localStorage.getItem("token"),
  ...moreHeaders
});

const signUp = user =>
  fetch(signupUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user })
  })
    .then(jsonify)
    .then(saveToken)
    .catch(handleServerError);

const logIn = user =>
  fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user })
  })
    .then(jsonify)
    .then(saveToken)
    .catch(handleServerError);

const validateUser = () => {
  if (!localStorage.getItem("token"))
    return Promise.resolve({ error: "no token" });

  return fetch(validateUrl, {
    headers: constructHeaders()
  })
    .then(jsonify)
    .then(saveToken)
    .catch(handleServerError);
};

const postJob = job =>
  fetch(jobsUrl, {
    method: "POST",
    body: JSON.stringify({ job }),
    headers: constructHeaders({
      "Content-Type": "application/json",
      Accept: "application/json"
    })
  })
    .then(jsonify)
    .catch(handleServerError);

const getJobs = () =>
  fetch(filteredJobsUrl, {
    headers: constructHeaders({
      "Content-Type": "application/json",
      Accept: "application/json"
    })
  }).then(jsonify);

const clearToken = () => localStorage.removeItem("token");

const dropJob = id =>
  fetch(dropJobUrl, {
    method: "DELETE",
    body: JSON.stringify({ job_id: id }),
    headers: constructHeaders({
      "Content-Type": "application/json",
      Accept: "application/json"
    })
  });

const deleteJob = id =>
  fetch(`${jobsUrl}/${id}`, {
    method: "DELETE",
    headers: constructHeaders({
      "Content-Type": "application/json",
      Accept: "application/json"
    })
  });

// delete '/drop_task', to: 'users#drop_task'

const acceptJob = id =>
  fetch(acceptJobUrl, {
    method: "POST",
    body: JSON.stringify({ job_id: id }),
    headers: constructHeaders({
      "Content-Type": "application/json",
      Accept: "application/json"
    })
  }).then(jsonify);

const showJob = id => {
  return fetch(jobsUrl + `/${id}`)
    .then(resp => resp.json())
    .then(data => data);
};

const editJob = job => {
  console.log(`edit this job ${job.id}`);
};

export default {
  signUp,
  logIn,
  validateUser,
  clearToken,
  postJob,
  getJobs,
  dropJob,
  acceptJob,
  editJob,
  showJob,
  deleteJob
};
