"use client";

import { FormEvent, useState } from "react";

export default function WritingForm() {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    category: "Poetry",
    excerpt: "",
    content: "",
    coverImage: "",
    tags: "",
    featured: false,
    status: "draft",
  });

  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage("Saving...");

    try {
      const response = await fetch("/api/writings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          tags: form.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Writing created successfully! 🎉");

        setForm({
          title: "",
          slug: "",
          category: "Poetry",
          excerpt: "",
          content: "",
          coverImage: "",
          tags: "",
          featured: false,
          status: "draft",
        });
      } else {
        setMessage(data.message || "Failed to create writing.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Could not connect to the API.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-6 p-6">
      <div>
        <label className="mb-2 block">Title</label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full rounded border p-3"
          placeholder="The Silence of Mountains"
        />
      </div>

      <div>
        <label className="mb-2 block">Slug</label>
        <input
          name="slug"
          value={form.slug}
          onChange={handleChange}
          required
          className="w-full rounded border p-3"
          placeholder="the-silence-of-mountains"
        />
      </div>

      <div>
        <label className="mb-2 block">Category</label>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full rounded border p-3"
        >
          <option>Poetry</option>
          <option>Literature</option>
          <option>Research</option>
          <option>Case Study</option>
          <option>Technology</option>
          <option>Travel</option>
          <option>Books</option>
          <option>Personal Reflections</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block">Excerpt</label>
        <textarea
          name="excerpt"
          value={form.excerpt}
          onChange={handleChange}
          className="w-full rounded border p-3"
          rows={3}
          placeholder="A short description..."
        />
      </div>

      <div>
        <label className="mb-2 block">Content</label>
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          required
          className="w-full rounded border p-3"
          rows={10}
          placeholder="Write your content here..."
        />
      </div>

      <div>
        <label className="mb-2 block">Cover Image</label>
        <input
          name="coverImage"
          value={form.coverImage}
          onChange={handleChange}
          className="w-full rounded border p-3"
          placeholder="/writings/mountains.jpg"
        />
      </div>

      <div>
        <label className="mb-2 block">Tags</label>
        <input
          name="tags"
          value={form.tags}
          onChange={handleChange}
          className="w-full rounded border p-3"
          placeholder="poetry, nature, mountains"
        />
        <p className="mt-1 text-sm text-gray-500">
          Separate tags with commas.
        </p>
      </div>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="featured"
          checked={form.featured}
          onChange={handleChange}
        />
        Featured writing
      </label>

      <div>
        <label className="mb-2 block">Status</label>
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full rounded border p-3"
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>

      <button
        type="submit"
        className="rounded bg-black px-6 py-3 text-white"
      >
        Save Writing
      </button>

      {message && <p>{message}</p>}
    </form>
  );
}