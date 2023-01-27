import React from 'react';

const Growth = ({ fill, className, onClick }) => {
  return (
    <svg
      width="127"
      height="126"
      viewBox="0 0 127 126"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || 'currentColor'}
      className={className}
      onClick={onClick}
    >
      <g clipPath="url(#clip0_189_284)">
        <path d="M126.5 77.2832C126.399 76.6483 126.156 76.0443 125.79 75.5161C125.423 74.9878 124.943 74.5488 124.383 74.2316C121.312 72.3318 114.264 70.747 107.462 74.1431C104.627 75.5606 101.772 77.2635 99.1145 78.8976C99.0555 78.7795 98.9866 78.6613 98.9177 78.5432C98.0219 77.2241 96.3386 76.5745 93.917 76.5745C90.9048 76.5745 85.3333 79.5276 77.8028 83.7505C75.5255 85.0991 73.1759 86.3215 70.7645 87.4124C69.1895 87.2254 67.6539 87.0777 65.9903 86.9202C64.0216 86.7332 61.8855 86.5265 59.2473 86.2115C58.9225 83.6718 58.2826 78.4251 57.1408 71.8593C56.5698 68.9062 58.4205 65.6085 60.9995 62.6357C63.4083 65.3788 66.6056 67.3109 70.1542 68.1679C71.8055 68.5818 73.5017 68.7901 75.2041 68.788C79.986 68.7543 84.6485 67.2905 88.5916 64.5848C96.0236 59.5054 102.156 48.0374 107.078 38.8237C110.031 33.3407 112.984 27.6707 114.894 26.4599C116.804 25.2491 116.499 23.6545 116.036 22.9063C114.756 20.8391 108.161 20.6127 96.3484 22.2074C90.9737 22.9457 77.6453 25.1605 70.0951 29.5705C55.6248 38.0952 52.1598 46.8463 58.3811 58.8459L58.6567 59.3184C57.4825 60.5856 56.4249 61.9562 55.4969 63.4134L55.3197 62.5766C53.8193 55.6746 51.9229 48.8645 49.6398 42.1804C54.0695 38.932 55.3 32.9273 52.8784 25.6823C51.6873 21.9712 44.6983 12.7968 43.3201 10.9757C34.4608 -0.620233 33.1023 -0.246171 31.9112 0.0786732C31.6144 0.167877 31.3386 0.316064 31.1005 0.514361C30.8623 0.712659 30.6665 0.956987 30.525 1.23272C30.3834 1.50844 30.299 1.8099 30.2767 2.11904C30.2544 2.42817 30.2948 2.73862 30.3953 3.0318C30.6524 5.37938 30.6821 7.74632 30.4839 10.0996C30.2476 16.124 29.9326 24.3731 32.4526 32.1299C34.8644 39.4241 39.0578 42.1016 41.312 43.0466C42.4846 43.5393 43.7415 43.8 45.0133 43.8145C45.3227 43.815 45.6318 43.7953 45.9386 43.7554C48.1299 50.2095 49.9539 56.7825 51.4019 63.4429C53.4494 72.7452 54.5617 81.0927 55.0539 85.296C54.3747 84.9515 53.5675 84.4888 52.7308 84.0065C44.0723 78.8534 34.5106 75.3989 24.558 73.828C9.09342 71.1604 1.97639 74.1824 1.68107 74.3104C1.20201 74.5192 0.825528 74.9099 0.634461 75.3963C0.443393 75.8827 0.453388 76.4252 0.662246 76.9042C0.871104 77.3833 1.26172 77.7598 1.74815 77.9508C2.23459 78.1419 2.77701 78.1319 3.25607 77.923C3.32498 77.923 9.58561 75.2456 23.928 77.7065C33.4553 79.2027 42.6077 82.5107 50.89 87.4518C53.154 88.7216 54.6405 89.578 56.0776 89.7749C60.0151 90.3065 62.9683 90.5821 65.567 90.8282C69.814 91.1447 74.0319 91.7732 78.1867 92.7084C85.5498 94.372 90.3831 97.3448 91.8006 101.056C92.5291 103.025 92.5192 105.131 90.9934 106.667C90.5623 107.088 90.0544 107.422 89.4972 107.651C86.6228 108.823 79.6534 106.46 75.647 105.308C72.9101 104.387 70.092 103.728 67.2306 103.34C58.761 103.022 50.2824 103.649 41.9519 105.21C41.4402 105.314 40.9909 105.618 40.7029 106.053C40.4149 106.489 40.3118 107.021 40.4162 107.533C40.5207 108.045 40.8241 108.494 41.2598 108.782C41.6954 109.07 42.2277 109.173 42.7394 109.069C50.7493 107.599 58.8953 107.005 67.0337 107.297C69.588 107.674 72.1044 108.273 74.5544 109.088C77.7044 109.994 80.8937 110.9 83.7977 111.421C73.8063 117.475 64.5826 122.062 60.2612 122.062C51.7365 122.062 16.299 104.875 3.36436 98.2602C2.90173 98.0407 2.37178 98.0101 1.88695 98.1749C1.40212 98.3396 1.00056 98.6868 0.767473 99.1428C0.534383 99.5987 0.488104 100.128 0.638454 100.617C0.788805 101.106 1.12395 101.518 1.57279 101.765C3.54154 102.749 49.0492 126 60.2612 126C65.9903 126 78.5214 119.444 91.023 111.471C92.342 110.594 92.9917 110.191 93.9761 109.581C108.781 99.8451 122.848 88.6527 124.531 84.6562C124.993 83.677 125.235 82.6085 125.24 81.5259C126.163 80.3126 126.611 78.8038 126.5 77.2832ZM72.1525 32.9863C81.3465 27.5723 101.231 25.1113 109.618 25.1113H110.701C108.643 27.6116 106.428 31.746 103.652 36.9238C98.9373 45.8226 93.0311 56.8181 86.3669 61.356C84.1747 62.8913 81.6862 63.9522 79.0607 64.4708C76.4351 64.9895 73.7302 64.9545 71.1189 64.3682C68.2431 63.6745 65.6636 62.0813 63.7558 59.8204C65.872 57.8508 68.1581 56.072 70.5873 54.5048C70.9922 54.2103 71.2697 53.7726 71.3634 53.2807C71.457 52.7889 71.3597 52.2799 71.0913 51.8572C70.8229 51.4345 70.4036 51.13 69.9186 51.0056C69.4337 50.8812 68.9195 50.9462 68.4808 51.1874C66.0475 52.7568 63.7433 54.5179 61.5901 56.4538C57.4755 48.2343 57.9578 41.3437 72.1033 32.9863H72.1525ZM42.887 39.3749C41.2234 38.6859 38.1522 36.6679 36.2326 30.8601C33.8898 23.7923 34.195 15.9468 34.4214 10.1882C34.4214 8.7707 34.5297 7.48117 34.5395 6.31961C39.2744 11.6648 48.0156 23.4674 49.1476 26.8537C50.8211 31.874 50.4765 35.782 48.1633 38.1543C47.1789 35.526 46.5095 34.0495 46.4406 33.892C46.2265 33.4155 45.8319 33.0436 45.3437 32.8581C44.8554 32.6725 44.3134 32.6886 43.8369 32.9027C43.3605 33.1167 42.9886 33.5113 42.803 33.9996C42.6175 34.4879 42.6336 35.0299 42.8476 35.5063C42.8476 35.5063 43.5367 37.0518 44.5605 39.7884C43.9865 39.7267 43.4236 39.5876 42.887 39.3749ZM109.175 77.6671C114.5 74.9995 120.003 76.2004 122.267 77.5785C122.331 77.6175 122.391 77.6638 122.444 77.7163C120.18 76.919 116.705 77.4013 112.03 79.2027C108.633 80.5124 105.413 82.2384 102.442 84.3412C99.6362 86.182 95.807 88.6823 88.818 92.4721C87.7161 91.8415 86.5714 91.2889 85.3923 90.8184C88.2372 89.4993 91.6234 87.8652 93.0508 87.127C94.7931 86.1426 96.8505 84.9023 99.0161 83.5537C102.166 81.6046 105.73 79.3898 109.175 77.6671ZM79.6436 87.1762C84.1717 84.6562 91.653 80.7187 93.8678 80.5021C94.6247 80.3631 95.4054 80.4381 96.122 80.7187C94.3108 81.8409 92.598 82.8843 91.2001 83.6718C89.0641 84.8334 81.9667 88.1015 79.8503 89.0662L79.0825 88.8791L77.2811 88.4854C78.0194 88.1015 78.7872 87.6684 79.6633 87.1762H79.6436ZM120.918 83.1304C119.639 86.0835 108.614 94.9429 96.1122 103.458C96.1401 102.161 95.9196 100.872 95.4625 99.6581C94.7618 97.9033 93.6751 96.3288 92.283 95.0512C98.4058 91.6748 101.94 89.3713 104.578 87.6388C107.321 85.6887 110.298 84.0882 113.437 82.8745C118.969 80.7482 121.066 81.2502 121.312 81.4766C121.352 82.0526 121.222 82.6276 120.938 83.1304H120.918Z" />
      </g>
      <defs>
        <clipPath id="clip0_189_284">
          <rect
            width="126"
            height="126"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Growth;
