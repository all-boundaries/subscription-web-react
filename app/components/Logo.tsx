export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={800}
      height={800}
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      viewBox="0 0 64 64"
      fill="currentColor"
    >
      <path
        d="M0 0h1280v800H0z"
        style={{
          fill: "none",
        }}
        transform="translate(-1152 -256)"
      />
      <path d="M40.957 9.195c.798.259 1.34 1 1.344 1.84.016.368.017.668.017.668s-.013 10.222-12.116 19.632c-4.924 3.828-9.194 10.05-10.31 15.868a1.952 1.952 0 0 1-3.537.727c-3.45-5.112-7.36-14.664-.838-25.977 5.882-10.2 16.742-15.415 25.44-12.758ZM23.909 54.219a2.021 2.021 0 0 1-1.406-1.917c-.017-.341-.019-.61-.019-.61s.013-10.222 12.117-19.632c4.879-3.794 9.117-9.94 10.278-15.71a2.025 2.025 0 0 1 3.676-.722c3.423 5.15 7.184 14.62.73 25.813-5.868 10.174-16.688 15.39-25.376 12.778Z" />
    </svg>
  );
}
