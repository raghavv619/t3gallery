import Link from "next/link";

const mockUrls = ["https://mhan0vhvcz.ufs.sh/f/1pYxAMHKCoISKD1ce3SUmRgaVe6ZsOHuWp8tYhCrSkcX4lbP",
  "https://mhan0vhvcz.ufs.sh/f/1pYxAMHKCoISdyMRr8UMKdASvQu0erRbNg65HFh4tIqcfmyY",
  "https://mhan0vhvcz.ufs.sh/f/1pYxAMHKCoISxOAEVa7iU1tbl5qSMr0JBHsZIX7eghRwQKoW",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        [...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48 ">
            <img src={image.url} alt="image" />
          </div>
        ))}
        {/* Hello, Gallery in Progress! */}
      </div>
    </main>
  );
}
