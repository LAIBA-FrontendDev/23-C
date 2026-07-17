"use client";

interface ProductFilterProps {
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  sort: string;
  setSort: (value: string) => void;
  categories: string[];
}

export default function ProductFilter({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
  categories,
}: ProductFilterProps) {
  return (
    <div className="w-full bg-white border border-gray-100 p-6 rounded-2xl shadow-sm mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        
        {/* Search Input Controller Element */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-extrabold ml-0.5">
            Search Collection
          </label>
          <input
            type="text"
            placeholder="Search luxury handbags..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all focus:bg-white focus:border-[#800020] focus:ring-4 focus:ring-[#800020]/5"
          />
        </div>

        {/* Dynamic Category Filtering Controller Dropdown */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-extrabold ml-0.5">
            Filter Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-3 text-sm font-medium outline-none cursor-pointer transition-all focus:bg-white focus:border-[#800020] focus:ring-4 focus:ring-[#800020]/5"
          >
            <option value="" className="bg-white">All Showroom Pieces</option>
            {categories.map((item) => (
              <option key={item} value={item} className="bg-white">
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Sequential Sorting Mechanism Array Trigger Option */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-extrabold ml-0.5">
            Arrange Collection
          </label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-3 text-sm font-medium outline-none cursor-pointer transition-all focus:bg-white focus:border-[#800020] focus:ring-4 focus:ring-[#800020]/5"
          >
            <option value="" className="bg-white">Featured Selection</option>
            <option value="low" className="bg-white">Price: Low to High</option>
            <option value="high" className="bg-white">Price: High to Low</option>
            <option value="new" className="bg-white">Newest Statements</option>
          </select>
        </div>

      </div>
    </div>
  );
}

